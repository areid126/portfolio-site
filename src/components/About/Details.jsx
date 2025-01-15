const DETAILS = [
    {title: "Overview", body: "I am an undergraduate in my third year at the University of St Andrews, where I am on track to graduate with a first-class honours degree in Computer Science. I am proficient in several areas of computer science and specialise in full-stack web development, specifically making websites using Express and React."},
    {title: "Outlook", body: "I am always looking to learn new skills and technologies and as such am always experimenting with different web development tools and keeping up with the ever-changing web development environment."},
    {title: "Personal Life", body: "Outside of work I do archery and have an interest in travelling and sightseeing. I recently completed a semester studying abroad in Australia at Macquarie University, where I developed both my skills as a web developer and myself as a person, becoming more independent and responsible."},
];

const Detail = ({detail}) => {
    return (
        <>
            <h2 class="text-2xl font-bold text-pink-600" >{detail.title}</h2>
            <p>{detail.body}</p> 
        </>
    );
} 

const Details = () => {
    return (
        <div class="flex flex-col gap-3 text-xl font-semibold text-slate-800">
            {DETAILS.map((detail, i) => <Detail detail={detail} key={i}/>)}
        </div>
    );
}

export default Details;