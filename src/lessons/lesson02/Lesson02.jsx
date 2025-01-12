import MyButton from "../../components/myButtons/MyButton";

function Lesson02() {
  const element = <h4>Это JSX из переменной element</h4>;
  const text = "Эта строка пришла из переменной текст";

  const react = {
    developer: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };

    function showDeveloper(obj) {
        if (obj.developer) {
            return "Developer: " + obj.developer;
        }
        return "Передайте валидный объект!"
    }
    
    const isLoggedIn = true;

  return (
    <div>
      <h2>JSX components </h2>
      <p>
        В JSX мы можем пользоватся динамическими данными, которые приходят из
        телареакт компонента или других файлов
      </p>

      {element}
      <p>Здесь будет строка: {text}</p>
      <p>Это вычисление случилось в JSX: {20 * 22}</p>
      {isLoggedIn ? (
        <img width={"50px"} src={react.logo} alt="react.logo" />
      ) : (
        "Пусто!"
      )}

      {/* <p>React developer: {react.developer}</p> */}
      <p>{showDeveloper(react)}</p>
      <h4>Пример тернарного оператора в Реакт:</h4>
      <p>
        Пользователь <b>{isLoggedIn ? "в данный момент" : "не"}</b> авторизован
      </p>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default Lesson02;
