import React, {useState} from 'react';
import './App.css';
import 'components/HeaderContent'
import HeaderContent from "components/HeaderContent";
import MyComponent from "components/MyComponent";
import ButtonStyled from "./components/ButtonStyled";
import MyButton from "./components/MyButton";
import MyStateComponent from "./components/MyStateComponent";
import ClickCounter from "./components/ClickCounter";
import ReloadControlEx from "./components/ReloadControlEx";

interface PersonProps {  // 타입 힌트에 사용
    name?: string;
    age?: number;
}
function Person(
    // props: { name:string;age:number; }
    props: PersonProps
)
{
    return <h1>Hello, {props.name}. You are {props.age} years old.</h1>;
}

interface FruitListProps {
    // items: Array<string>;
    // items: string[];
    // items?: string[];
    // items: any;
    // items: undefined;
    items: unknown;
}

function isStringArr(value: unknown): value is string[] {
    return typeof value === 'string';
}

function FruitList(props: FruitListProps) {
    // const { items } = props as { items: string[] };
    // const items = props.items as string[];
    const items = props.items;
    if(!isStringArr(items)) {
        return (
            <ul>
                <p>items 데이터 타입이 잘못 들어왔습니다.</p>
            </ul>
        )
    }
    return (
        <ul>
            {/* ? 를 사용한 조건부 참조형 타입 컨트롤 수행 시 */}
            {/* 해당 타입을 사용할 때에도 조건부 참조하면 좋다 */}
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

interface WelcomeProps {
    children: any;
}

function Welcome(props: WelcomeProps) {
    return <div>{props.children}</div>;
}

function Card(props: any) {
    return (
        <div style={{border: '1px solid gray', margin: '10px', padding: '10px' }}>
            {props.children}
        </div>
    );
}

function ToggleText(props:any) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div onClick={() => setIsShown(!isShown)}>
            {isShown ? props.children : props.alternative}
        </div>
    );
}


function App() {
  // return (
    // <div className="App">
        {/*<MyComponent />*/}
        {/*<ButtonStyled>일반 버튼</ButtonStyled>*/}
        {/*<ButtonStyled primary={true}>Primary 버튼</ButtonStyled>*/}
        {/*<Person name="Sarah" age={28} />;*/}
        {/*<Person name="John" age={29} />;*/}
        {/*<FruitList items={['Apple', 'Banana', 'Cherry']} />;*/}
        {/*<Welcome>*/}
        {/*    children에 해당하는 내용을 여기에 전달합니다.*/}
        {/*</Welcome>*/}
        {/*<Welcome>*/}
        {/*    <Person name="John" age={29} />;*/}
        {/*</Welcome>*/}
        {/*<Card>*/}
        {/*    <h1>Hello, world!</h1>*/}
        {/*    <p>Welcome to my application.</p>*/}
        {/*</Card>*/}
        {/*<ToggleText alternative="Click to show text">Hello, world!</ToggleText>*/}
        {/*<MyButton handlerType={"external props receiver"}/>*/}
        {/*<MyStateComponent />*/}
        {/*<ClickCounter/>*/}
        // <ReloadControlEx/>
    // </div>
  // );
    return <FruitList items={['Apple', 'Banana', 'Cherry']} />;
}

export default App;
