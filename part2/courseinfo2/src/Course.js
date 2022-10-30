
const Header = ({ course }) => {
    return <h1>{course}</h1>
}

const Content = ({ part, exercises }) => {
    return <p>{part} {exercises}</p>
}

const Total = ({ parts }) => {

    let exercises = [];

    parts.forEach((part) => (
        exercises.push(part.exercises)
    ))

    let total = exercises.reduce((prev, cur) => prev + cur)

    return <h2>Total exercises {total}</h2>
}

export const Course = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <Header course={course.name} />
                    <div>
                        {course.parts.map((part) => (
                            <Content key={part.id} part={part.name} exercises={part.exercises} />
                        ))}
                    </div>
                    <Total parts={course.parts}/>
                </div>
            ))}
        </div>
    )
}