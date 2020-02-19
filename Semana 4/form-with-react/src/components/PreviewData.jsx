import React from 'react';

const previewData = props => {
    const users = props.data.map((user, idx) => (
        <div key={idx}>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.username}</p>
        </div>
    ));
    return(
        <div className="col-4">
            Usuarios Capturados
            {users}
        </div>
    );
}

export default previewData;