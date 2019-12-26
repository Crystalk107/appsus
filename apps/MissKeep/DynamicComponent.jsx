import mapDynamicComponents from "./service/mapDynamicComponents.js"

export default class DynamicComponent extends React.Component {

    state = {
        componentName: 'NoteText'
    }


    getComponent() {

        return mapDynamicComponents[this.state.componentName]
    }


    setComponent = (ev) => {
        const { props }= this
        this.setState({ componentName: props.typeNote })
    }


    render() {
        const { props }= this
        const Cmp = this.getComponent();

        return <React.Fragment>
            <Cmp note={props.note}></Cmp>
        </React.Fragment>

    }
}



