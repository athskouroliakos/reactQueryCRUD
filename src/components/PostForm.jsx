import { useState } from 'react';

const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    name: initialValue?.name || '',
    founder: initialValue?.founder || '',
    animal: initialValue?.animal || '',
    color: initialValue?.color || '',
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input
        onChange={handleChangeInput}
        type="text"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      name: '',
      founder: '',
      animal: '',
      color: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Name')}
      {renderField('Founder')}
      {renderField('Animal')}
      {renderField('Color')}

      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
