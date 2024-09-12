const ExpenseSchema = require("../models/ExpenseModel")



// addExpense items
exports.addExpense = async (req, res) => {
    const {title, amount, category, date}  = req.body

    const expenses = new ExpenseSchema({
        title,
        amount,
        category,
        date
    })

    try {
        //validations
        if(!title || !category || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount ){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await expenses.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

}

// retrive expense data
exports.getExpense = async (req, res) =>{
    try {
        const incomes = await ExpenseSchema.find()
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// delete expense data
exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}


// update expense data
exports.updateExpense = async (req, res) => {
    try {
       console.log(req.body);
      const expense = await ExpenseSchema.findByIdAndUpdate(req.body.id, req.body, { new: true });
      if (!expense) return res.status(404).json({
         msg: 'Income not found' });
      res.json(expense);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };