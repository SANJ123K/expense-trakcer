import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added to manage loading states
  const [currentUser, setCurrentUser] = useState(null); // Manage current user

  // Helper function to handle errors and set error messages
  const handleError = (err) => {
    setError(err.response ? err.response.data.message : "An error occurred");
  };

  // Add user by signup
  const addUser = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}signup`, user);
      
      // Store the token or relevant user data in localStorage
      localStorage.setItem("user", response.data.token); // Storing token, not the entire user object

      // Set current user state
      setCurrentUser(response.data.user);
    } catch (err) {
      handleError(err); // Handle any error
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const addIncome = async (income) => {
    try {
      setLoading(true);
      await axios.post(`${BASE_URL}add-income`, income);
      await getIncomes(); // Refresh incomes after adding
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch incomes from the server
  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      if (response.status === 200) {
        setIncomes(response.data);
      } else {
        setLoading(true);
      }
    } catch (err) {
      handleError(err);
    }
  };

  // Delete income by ID and refresh income list
  const deleteIncome = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}delete-income/${id}`);
      await getIncomes(); // Refresh incomes after deleting
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Update income
  const updateIncome = async (income) => {
    try {
      const response = await axios.put(`${BASE_URL}update-income`, income);
      if (response.status === 200) {
        await getIncomes();
      } else {
        console.log("Server-side error");
      }
    } catch (err) {
      handleError(err);
    }
  };

  // Calculate total income
  const totalIncome = () => {
    return incomes.reduce((acc, income) => acc + parseFloat(income.amount), 0);
  };

  // Add new expense and fetch updated expenses
  const addExpense = async (expense) => {
    try {
      setLoading(true);
      await axios.post(`${BASE_URL}add-expense`, expense);
      await getExpenses(); // Refresh expenses after adding
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch expenses from the server
  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`);
      setExpenses(response.data);
    } catch (err) {
      handleError(err);
    }
  };

  // Delete expense by ID and refresh expense list
  const deleteExpense = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}delete-expense/${id}`);
      await getExpenses(); // Refresh expenses after deleting
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };


  // update expense
  const updateExpense = async (expense) => {
    try {
      const response = await axios.put(`${BASE_URL}update-expense`, expense);
      if (response.status === 200) {
        await getExpenses();
      } else {
        console.log("Server-side error");
      }
    } catch (err) {
      handleError(err);
    }
  };

  // Calculate total expenses
  const totalExpenses = () => {
    return expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  };

  // Calculate total balance (income - expenses)
  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  // Transaction history (get latest 3 transactions)
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return history.slice(0, 3);
  };

  // Clear errors after 5 seconds
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <GlobalContext.Provider
      value={{
        addUser,
        currentUser,
        setCurrentUser,
        addIncome,
        getIncomes,
        updateIncome,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        updateExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
        loading, // Added loading state
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
