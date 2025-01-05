const Contact = ({ ref }) => {
    return (
        <section ref={ref} class="p-36 flex justify-center text-slate-800 bg-amber-300">
            <form class="flex flex-col w-[450px] border p-6 rounded-3xl bg-white">
                <h1 class="py-10 text-center text-3xl font-bold  uppercase">Contact Me</h1>
                <label class="font-semibold">Name</label>
                <input class="border rounded-md p-2" placeholder="name" type="text"></input>
                <label class="font-semibold my-2">Email</label>
                <input class="border rounded-md p-2" placeholder="email@example.com" type="text"></input>
                <label class="font-semibold my-2">Subject</label>
                <input class="border rounded-md p-2" placeholder="subject" type="text"></input>
                <label class="font-semibold my-2">Message</label>
                <textarea class="border rounded-md p-2 min-h-36" placeholder="message"></textarea>
                <input class="text-xl font-semibold text-slate-50 h-12 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400 my-7" type="submit" value="Submit"></input>
            </form>
        </section>
    );
}

export default Contact;