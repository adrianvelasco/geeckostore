import React, {Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import Text from '../Text';
import {NotFound} from '../../Errors';

export default ({match: {url}, name, born, decased, description, image, texts}) =>
  <Fragment>
      <img src={image} alt={name} style={{maxWidth:250}}></img>

      <h1>{name}</h1>

      <h3>{born} &mdash; {decased}</h3>

      <p>{description}</p>

      <ul>
        {texts.map(({id, title}) =>
        	<li key={id}>
            <Link to={`${url}/texts/${id}`}>
              {title}
            </Link>
        	</li>
        )}
      </ul>


    <Route path={`${url}/texts/:textId`} render={
        props => {
          const text = texts.find(({id}) => id === props.match.params.textId)

          if(!text){
            return <NotFound/>;
          }

          return <Text {...text}/>
        }
      }/>
  </Fragment>
