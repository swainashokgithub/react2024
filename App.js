
        const heading=React.createElement("h1",{id:"hhhh"},"Hello World!!!!")


        const parent=React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"Child"},[
                React.createElement("h1",{id:"gch"},"Hello"),
                React.createElement("h2",{id:"gch2"},"How are you ?")
            ]),

            React.createElement("div",{id:"Child2"},[
                React.createElement("h1",{id:"gch"},"Hello"),
                React.createElement("h2",{id:"gch2"},"How are you ?")
            ]),

        ])
        

        const root= ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)
    