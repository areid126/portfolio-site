const SKILLS = [
    { text: "Express React HTML CSS .NET%20MAUI", colour: "bg-pink-800"},
    { text: "Javascript Java C C# Python", colour: "bg-pink-700"},
    { text: "MongoDB MySQL SQL", colour: "bg-pink-600"},
    { text: "Git GitHub", colour: "bg-pink-500"}
];

const SkillBubble = ({skill}) => {
    return (
        <li class="rounded-full border-4 border-dashed w-1/4 aspect-[1/1] max-lg:w-auto  max-w-[250px]">
            <div class={`m-4 flex flex-col aspect-[1/1] items-center justify-center rounded-full ${skill.colour}`}>
                {skill.text.split(" ").map(word => <p>{decodeURI(word)}</p>)}
            </div>
        </li>
    );
}

const SkillList = () => {
    return (
        <ul class="flex justify-center gap-11 px-12 py-14 text-center text-xl font-semibold max-w-[1280px] w-full mx-auto max-lg:max-w-[500px] max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:max-w-[250px] max-lg:p-0">
            {SKILLS.map((skill, i) => <SkillBubble skill={skill} key={i}/>)}
        </ul>
    );
}

export default SkillList;