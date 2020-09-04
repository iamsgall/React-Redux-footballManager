import React from 'react';
import {connect} from 'react-redux';
import cancha from '../cancha.svg';

export function Titulares(props) {
  const {titulares, quitTitular} = props;
  return (
    <section>
      <h2>Titulares</h2>
      <div className='cancha'>
        {titulares.map(titular => (
          <article className='titular' key={titular.id}>
            <div>
              <img src={titular.photo} alt='' />
              <button onClick={() => quitTitular(titular)}>X</button>
            </div>
            <p>{titular.name}</p>
          </article>
        ))}
        <img src={cancha} alt='' />
      </div>
    </section>
  );
}
const mapStateToProps = state => {
  return {
    titulares: state.titulares,
  };
};
const mapDispatchToProps = dispatch => ({
  quitTitular(player) {
    dispatch({
      type: 'QUIT_TITULAR',
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
