import MyButton from "../../components/myButtons/MyButton";

function Lesson02() {
  const element = <h3>Это JSX из переменной element</h3>;
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
      <h4>Lesson 02</h4>
      <h2>JSX components😳</h2>
      <p>
        В JSX мы можем пользоватся динамическими данными, которые приходят из
        телареакт компонента или других файлов
      </p>

      {element}
      <p>Здесь будет строка: {text}</p>
      <p>Это вычисление случилось в JSX: {20 * 22} !!!</p>
      {isLoggedIn ? (
        <img width={"200px"} src={react.logo} alt="react.logo" />
      ) : (
        "Пусто!"
      )}

      <p>{showDeveloper(react)}</p>
      <h3>Пример тернарного оператора в Реакт:</h3>
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
