import React from 'react';
import {connect} from 'react-redux';

export const Substitutes = props => {
  const {substitutes, quitSubstitute} = props;
  return (
    <section>
      <h2>Substitutes</h2>
      <div className='suplentes'>
        {substitutes.map(substitute => (
          <article className='suplente' key={substitute.id}>
            <div>
              <img src={substitute.photo} alt='' />
              <button onClick={() => quitSubstitute(substitute)}>X</button>
            </div>
            <p>{substitute.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  substitutes: state.substitutes,
});

const mapDispatchToProps = dispatch => ({
  quitSubstitute(player) {
    dispatch({
      type: 'QUIT_SUBSTITUTE',
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);
