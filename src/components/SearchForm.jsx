import * as React from 'react';

export default function SearchForm() {
  return (
    <form className="search-form">
      <h2 className="search-form-title">Направление</h2>
      
      <div className="search-inputs">
        <div className="input-group">
          <label htmlFor="from" className="visually-hidden">Откуда</label>
          <input type="text" id="from" placeholder="Откуда" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94415836eb1f2dfe46fec7fe8815002b84cc099d6ff7afdf106e5b37bf18f30?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
        </div>
        
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75548b48092803dfea7b6d934031f0a2e541a46a5af7dd61775bcb09fbc4f5ae?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" className="switch-icon" loading="lazy" />
        
        <div className="input-group">
          <label htmlFor="to" className="visually-hidden">Куда</label>
          <input type="text" id="to" placeholder="Куда" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94415836eb1f2dfe46fec7fe8815002b84cc099d6ff7afdf106e5b37bf18f30?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
        </div>
      </div>

      <h2 className="search-form-title">Дата</h2>
      
      <div className="date-inputs">
        <div className="input-group">
          <label htmlFor="departure" className="visually-hidden">Дата отправления</label>
          <input type="text" id="departure" placeholder="ДД/ММ/ГГ" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3b0434be3dfe43149ea02cc21bf1c72b6c0d40f07c43f3acf4493276b035ba4?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
        </div>
        
        <div className="input-group">
          <label htmlFor="return" className="visually-hidden">Дата возвращения</label>
          <input type="text" id="return" placeholder="ДД/ММ/ГГ" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c49b41405741b8d3c483fb07a31dcdf2b84608d9c20cb15eb7a24fed97e90a2e?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
        </div>
      </div>

      <button type="submit" className="search-button">найти билеты</button>
    </form>
  );
}