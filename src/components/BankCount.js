import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, userDetails } from "../store/userSlice";

function BankCount() {
  const user = useSelector(userDetails);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [openEdit, setOpenEdit] = useState(false);
  const [userName, setUserName] = useState(user ? user.userName : "");

  const editName = async (event) => {
    console.log(userName);
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({ userName: userName }),
        }
      );
      const result = await response.json();
      dispatch(setUserDetails(result.body));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  function handleToggleEdit() {
    setOpenEdit(!openEdit);
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${loggedInUser.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des détails de l'utilisateur"
          );
        }

        const userData = await response.json();
        dispatch(setUserDetails(userData));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'utilisateur :",
          error
        );
      }
    };

    if (loggedInUser) {
      console.log("loggedInUser:", loggedInUser);
      fetchUserDetails();
    }
  }, [dispatch, loggedInUser]);

  const DataBank = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      count: "$2,082.79",
      desc: "Availabe Balance",
    },
    {
      id: 2,
      title: "Argent Bank Checking (x6712)",
      count: "$10,928.42",
      desc: "Availabe Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      count: "$184.30",
      desc: "Current Balance",
    },
  ];

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br />
          {user?.firstName} {user?.lastName} !
        </h1>{" "}
        <button onClick={handleToggleEdit} className="edit-button">
          Edit Name
        </button>
        {openEdit && (
          <form className="edit-name" onSubmit={editName}>
            <input type="text" onInput={(e) => setUserName(e.target.value)} />
            <button className="edit-button" type="submit">
              Save
            </button>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      {DataBank.map(({ id, title, count, desc }) => {
        return (
          <section key={id} className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{title}</h3>
              <p className="account-amount">{count}</p>
              <p className="account-amount-description">{desc}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default BankCount;
