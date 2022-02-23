import Button from "@mui/material/Button";

var StyledButton = {
    background: '#45A29E',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 20,
    padding: '15px',
    marginRight: '5px',
    marginTop: '10px',
    '&:hover': {
        color: "#FFFFFF",
    },
    textTransform: 'capitalize',
    fontSize: '11px',
    fontWeight: "500"

}

export function Tag(props) {
    const {tags} = props
    return (
        tags ?
            <>
                {tags.map((category, index) =>
                    <Button style={StyledButton} key={`tag-${index}`}>{category}</Button>)}
            </>
            : null

    )


}
