import {Link, useNavigate, useParams} from "react-router-dom";
import courses from "../data/courses";
import {useEffect} from "react";

const Course = () => {
    const {slug} = useParams();
    const navigate = useNavigate();
    const course = courses.find(course => course.slug === slug);

    useEffect(() => {
        if (!course) {
            navigate("..", {relative: "path"})
        }
    }, [course, navigate]);

    return (
        <div>
            <h1>{course?.title}</h1>
            <p>{course?.slug}</p>
            <p>{course?.id}</p>
            <Link to=".." relative="path">back</Link>
        </div>
    );
};

export default Course;