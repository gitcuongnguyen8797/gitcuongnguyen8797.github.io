export default function TagSkill({ skills }) {
    return (
        <ul className="tag-skill">
            {skills.map((value, index) => <li key={index} className="tag-skill__label txt--white">{value}</li>)}
        </ul>
    );
}