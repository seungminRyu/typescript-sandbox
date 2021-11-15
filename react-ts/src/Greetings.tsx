import React from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
};
// 컴포넌트의 props 중에서 생략해도 되는 값이 있다면 ? 문자를 사용하면 된다.

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            <h2>Greetings</h2>
            Hello, {name}, {mark}
            {optional && <p onClick={handleClick}>{optional}</p>}
        </div>
    );
}

Greetings.defaultProps = {
    mark: "!",
};

export default Greetings;
