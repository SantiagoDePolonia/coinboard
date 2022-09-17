import { Link } from "@mui/material";

function MenuItem({href, active = false, children}) {
    const activeStyle = active ?
        {
            textDecoration: 'underline',
            textDecorationThickness: "3px",
            textUnderlineOffset:"12px",
            textDecorationColor: "#b08b20"
        } :
        {
            fontSize: "1.3em",
            textDecoration: 'none'
        };

    const style = {
        courser: "pointer",
        paddingRight: "3em",
        fontSize: "1.3em",
        textTransform: "uppercase",
        ...activeStyle
    }
    
    return (
        <Link
            href={href}
            onClick={(e) => {
                e.preventDefault();
                window.location.href = href;
            }}
            color="#000"
            style={style}
        >
            {children}
        </Link>
    );
}
  
export default MenuItem;
  