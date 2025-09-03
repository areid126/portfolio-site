const DETAILS = [
    {title: "Overview", body: "I am an undergraduate in my fourth year of MSci Computer Science at the University of St Andrews, where I am on track to graduate with a first-class honours degree. I have experience with many areas of computer science, from web development to operating systems and everything in between."},
    {title: "Outlook", body: "I love learning about new areas of computer science, as well as expand my knowledge of areas I am already familiar with. As such, I am always working on new projects and tackling technologies I am not familiar with."},
    {title: "Personal Life", body: "Outside of my studies, I love to travel and sightsee. Most recently, I travelled to Sydney Australia to complete a semester studying abroad at Macquarie University, during which I grew a lot as a programmer and as a person. I also enjoy sightseeing domestically and have been travelling all across Scotland to visit different castles."},
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