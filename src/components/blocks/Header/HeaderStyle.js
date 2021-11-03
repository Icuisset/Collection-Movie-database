import {createUseStyles} from 'react-jss';

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
      headerNavBar: {
        "backgroundColor": "#131313",
        "padding": "20px 104px 20px",
        "@media(max-width: 750px)": {padding: '20px 40px 20px'}},
        
      headerLink: {
        "color": "white",
        "fontFamily": "'Roboto Slab', Arial, sans-serif",
        "fontWeight": "700",
        "fontSize": "20px",
        "lineHeight": "24px"
      },
  })

export default useStyles;