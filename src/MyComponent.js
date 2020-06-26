import React from "react";

const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다. <br/>
            동생 이름은 {children} 입니다.
        </div>
    )
}

MyComponent.defaultProps = {
    name: 'as'
}


export default MyComponent;
