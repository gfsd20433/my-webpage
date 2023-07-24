import React from 'react';


function MyComponent() {


  function add(a,c){
    return(b,d) => <>{a*b+d}</>
  }


  return (
    <div>
      {add(3,4)(5,7)}
    </div>
  );
}

export default MyComponent