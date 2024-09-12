const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    const { title, amount,date} = req.body;

    const incomes = new IncomeSchema({
        title,
        amount,
        date,

        
    });
    console.log(incomes)
    try {
        // Validations
        if (!title || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0 ||  !amount) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        // Save the income data to the database
        await incomes.save();
        res.status(200).json({ message: 'Income Added' });

    } catch (error) {
        console.error('Error adding income:', error.message); 
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const income = await IncomeSchema.find();
        res.status(200).json(income);
    } catch (error) {
        console.error('Error fetching incomes:', error);  
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}


exports.updateIncome = async (req, res) => {
    try {
        console.log(req.body);
      const income = await IncomeSchema.findByIdAndUpdate(req.body.id, req.body, { new: true });
      if (!income) return res.status(404).json({
         msg: 'Income not found' });
      res.json(income);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };