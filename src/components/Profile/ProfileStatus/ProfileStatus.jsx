import React from 'react'
import c from './../ComponentInfo/ComponentInfo.module.css'

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onPostStatus(e) {
        this.setState({
            status: e.currentTarget.value
        })

    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode.bind(this)}>{this.props.status || '-------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.state.status}></input>
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus