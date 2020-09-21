function generateCodeFromObject(obj){
    //return a code generated string
    return React.createElement("div", {
        name: "Clock",
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        name: "Hour"
      }), /*#__PURE__*/React.createElement("span", {
        name: "Minute",
        style: {
          color: "green",
          fontSize: "30"
        }
      }));
   }
   
   module.exports=generateCodeFromObject;