import React from "react";
import Divider from "@mui/material/Divider";

export default function DividerSolutto(){
    return(
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "#512b5b",
              color:"white",
              fontColor:"#512b5"
            },
          }}
        >
          <span className="title">www.solutto.cl</span>
        </Divider>
    )
}