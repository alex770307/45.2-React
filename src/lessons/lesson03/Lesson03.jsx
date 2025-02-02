// import MyButton from "../../components/myButtons/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
    return (
        <div>
            <h2>React Props children😻</h2>
            <p>Props используются для передачи данных от родительских компонентов
                дочерним компонентам. Это один из основных механизмов передачи
                данных в React.</p>
            {/* <MyButton />
            <MyButton />
            <MyButton /> */}
            <UserCard name={' Bilbo'} age={45} lastname={' Baggins'}/>
            <UserCard name={' Gendalf'} age={2000} lastname={' White'}/>
        </div>
    )
}

export default Lesson03;