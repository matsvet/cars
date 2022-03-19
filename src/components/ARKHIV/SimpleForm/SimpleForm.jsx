// import React, {useState} from 'react';
//
// const SimpleForm = (props) => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//
//     return <div>
//         <input type="email"
//                value={email}
//                onChange={(e) => setEmail(e.target.value)}
//                placeholder="email"
//         />
//         <div>
//             <input type="password"
//                    value={password}
//                    onChange={(e) => setPassword(e.target.value)}
//                    placeholder="password"
//             />
//         </div>
//         <button onClick={() => props.handleClick(email, password)}>
//             {props.title}
//         </button>
//     </div>
// };
//
// export default SimpleForm;