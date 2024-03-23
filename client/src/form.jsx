import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import { Link } from "react-router-dom";
import getRandomCities from "./utils/functions/getRandomCities";
import generateCode from "./utils/functions/generateCode";
import getTemperature from "./utils/functions/getTemperature";
import checkEmailInServer from "./utils/functions/checkEmailInServer";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const emailRef = useRef();
  const [sentCode, setSentCode] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [CODE, setCODE] = useState("");
  const navigate = useNavigate();

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    if (emailRef.current && emailRef.current.value.trim() !== "") {
      const answer = await checkEmailInServer(emailRef.current.value);

      if (answer === 200) {
        import.meta.env.emailJSkey
        emailjs.init(import.meta.env.VITE_EMAILKEY);
        await emailjs
          .send("service_welu0w1", "template_9yr1o2h", {
            to_name: emailRef.current.value,
            from_name: "Eden Yosef",
            message: CODE,
          })
          .then(
            async (result) => {
              setEmail(email);
              setTimerRunning(true);
              setSentCode(true);
            },
            (error) => {}
          );
      } else {
        alert("Non-Registered User.");
      }
    }
  };

  const handleCheckCode = () => {
    if (enteredCode === CODE && !isExpired) {
      navigate("/home");
    } else {
      alert("Invalid code");
    }
  };

  const handleResend = async () => {
    try {
      const selectedCities = getRandomCities();
      const temperatures = await getTemperature(selectedCities);
      const newCode = generateCode(temperatures);
      setCODE(newCode);
      emailjs.init(import.meta.env.VITE_EMAILKEY);

      await emailjs.send("service_welu0w1", "template_9yr1o2h", {
        to_name: email,
        from_name: "Eden Yosef",
        message: newCode,
      });
      setIsExpired(false);
      setTimerRunning(true);
      alert("Sent the one-time code to the email again.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    let timer;
    if (sentCode) {
      timer = setTimeout(() => {
        setIsExpired(true);
        setTimerRunning(false);
      }, 60 * 1000 * 5);
    }

    return () => clearTimeout(timer);
  }, [timerRunning]);

  useEffect(() => {
    const fetchData = async () => {
      const selectedCities = getRandomCities();
      const temperatures = await getTemperature(selectedCities);
      setCODE(generateCode(temperatures));
    };
    fetchData();
  }, []);

  return (
    <div className="formContainer">
      <div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <form className="form" onSubmit={handleSubmitEmail}>
        {!sentCode && (
          <>
            <p className="title">Sign in with an OTP code 🔑</p>
            <input
              className="input"
              ref={emailRef}
              type="email"
              placeholder="Enter email to send code"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="submit" type="submit">
              Submit code
            </button>

            <p>
              Unregistered? <Link to="/register"> Register here</Link>
            </p>
          </>
        )}

        {sentCode && !isExpired && (
          <>
            <h2 className="title">Sign in with an OTP code</h2>
            <>
              <p>Sent code to email: {email}</p>
              <input
                className="input"
                type="text"
                placeholder="Enter a code"
                value={enteredCode}
                onChange={(e) => setEnteredCode(e.target.value)}
              />
              <button className="submit" onClick={handleCheckCode}>
                Verify
              </button>
            </>
          </>
        )}
        {isExpired && sentCode && (
          <>
            <p>Expired code</p>
            <button className="submit" onClick={handleResend}>
              Resubmit code
            </button>
          </>
        )}
      </form>
    </div>
  );
};
export default Form;
