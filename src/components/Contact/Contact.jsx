import { useState } from "react";
import ImageList from "../ImageList";

// Regex for identifying if something looks like an email
const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const IMAGES1 = [
    {src: "/arrow-2.svg", style: "rotate-[60deg]"},
    {src: "/arrow-7.svg", style: "rotate-[25deg]"},
    {src: "/arrow-5.svg", style: "rotate-[20deg]"},
];

const IMAGES2 = [
    {src: "/arrow-9.svg", style: "rotate-90"},
    {src: "/arrow-6.svg", style: "rotate-90"},
    {src: "/arrow-4.svg", style: "rotate-180"},
];

const Contact = ({ ref }) => {
    // State for collecting inputs
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [gotcha, setGotcha] = useState(undefined);
    const [err, setErr] = useState(undefined);
    const [submitted, setSubmitted] = useState(false);

    // Function for handling the posts
    const onSubmit = async (event) => {
        event.preventDefault();

        // If the spam field has been filled in then do not send the form
        if (gotcha) return;

        // Do nothing if the required fields are not filled in
        if (!name || !email || !subject || !message) return setErr("Please complete all fields");

        // Check that the email is valid (vaguely)
        if (!EMAIL.test(email)) return setErr("Please enter a valid email");

        // If all fields are in the correct format then send of the request
        const body = { name: name, email: email, subject: subject, message: message, _gotcha: gotcha };

        console.log(body);

        // Send a fetch request to email handler
        try {
            const res = await fetch("http://localhost:3000", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // If the request was successful do something
            if (res.status === 200) {
                // Do something
                setSubmitted(true);
                setErr(undefined); // Remove any error messages
            }
            // Display the appropriate error code if an error occurs
            else if (res.status === 400) setErr("Please complete all fields");
            else if (res.status === 403) setErr("An error occurred");
            else if (res.status === 404) setErr("Please enter a valid email");
        } catch {
            setErr("An error occurred. Please try again later");
        }
    }

    // Event handler for sending a second message
    const onClick = () => {
        setName(undefined);
        setEmail(undefined);
        setSubject(undefined);
        setMessage(undefined);
        setGotcha(undefined);
        setErr(undefined);
        setSubmitted(false);
    }

    // Return a different form after the request has been submitted
    if (submitted) return (
        <section ref={ref} class="flex justify-center text-slate-800 bg-amber-300 min-h-screen items-center">
            <div class="flex flex-col w-[450px] p-6 rounded-3xl bg-white h-fit">
                <h1 class="py-10 text-center text-3xl font-bold">Thank you for your message</h1>
                <button onClick={onClick} class="text-xl font-semibold text-slate-50 h-12 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400 my-7">Send Another Message</button>
            </div>
        </section>
    );


    return (
        <section ref={ref} class="flex justify-center text-slate-800 bg-amber-300 min-h-screen items-center">
            <ImageList images={IMAGES1} hide={"max-lg:hidden"}/>
            <form class="flex flex-col w-[450px] p-6 rounded-3xl bg-white h-fit m-8">

                <div class="flex flex-col items-center py-10">
                    <h1 class="text-center text-3xl font-bold uppercase">Contact Me</h1>
                    <img src="/underline-4-slate-800.svg"></img>
                </div>

                <label class="font-semibold my-2">Name</label>
                <input onChange={(e) => setName(e.target.value)} class="outline-none focus:ring-2 ring-offset-2 ring-slate-600 border rounded-md p-2" placeholder="name" type="text" name="name" ></input>

                <label class="font-semibold my-2">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} class="outline-none focus:ring-2 ring-offset-2 ring-slate-600 border rounded-md p-2" placeholder="email@example.com" type="text" name="email"></input>
                <input onChange={(e) => setGotcha(e.target.value)} class="hidden" type="hidden" name="_gotcha"></input>

                <label class="font-semibold my-2">Subject</label>
                <input onChange={(e) => setSubject(e.target.value)} class="outline-none focus:ring-2 ring-offset-2 ring-slate-600 border rounded-md p-2" placeholder="subject" type="text" name="subject"></input>

                <label class="font-semibold my-2">Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} class="outline-none focus:ring-2 ring-offset-2 ring-slate-600 border rounded-md p-2 min-h-36 max-sm:min-h-20" placeholder="message" name="message"></textarea>
                <p class="text-center font-semibold mt-4 text-rose-700" >{err}</p>
                <input onClick={onSubmit} class="text-xl font-semibold text-slate-50 h-12 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400 my-7" type="submit" value="Submit"></input>
            </form>
            <ImageList images={IMAGES2} hide={"max-lg:hidden"}/>
        </section>
    );
}

export default Contact;