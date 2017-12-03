import React from 'react';

const TextField = props => {
  const { type, id, value, label, prefix, suffix } = props;

  return (
    <div className="form-group row">
      <label htmlFor={ id } className="col-3 col-form-label">
        { label }
      </label>
      <div className="col">
        <div className="input-group">
          { prefix && <span className="input-group-addon">{ prefix }</span> }
          <input type={ type }
                 className="form-control"
                 id={ id }
                 value={ value }
                 onChange={ event => props.onChange(event.target.value) }
                 required />
          { suffix && <span className="input-group-addon">{ suffix }</span> }
        </div>
      </div>
    </div>
  );
};

export default TextField;
