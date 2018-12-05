
// Exportacion de constante de Estilo

export const styles = theme => ({
  main:{
    width: 'auto',
    dislay: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]:{
      width:400,
      marginLeft: 'auto',
      marginRight: 'auto',
      
    },
  },
});
