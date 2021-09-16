import React, { useState, useEffect } from "react";
import "../app.css";
import DatePicker from "react-datepicker";
import 'firebase/storage';  


import "react-datepicker/dist/react-datepicker.css";


import { db } from "../firebase";

const Contact = () => {


  


  const [upload, setUpload] =useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = db.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("Uploaded a file")
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        date : startDate,
        subject : subject,
        
      })
      .then(() => {
        setLoader(false);
        alert("Your Assignment  has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1> Assignment Submission Form</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

  <label>Subject Name</label>
      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

<label>
  Choose Date

<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</label>



<label>
  Upload your files
<input type="file" onChange={onChange}/>
</label>


      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
