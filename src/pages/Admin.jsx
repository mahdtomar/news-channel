import React from "react";
import "../Sass/Admin.css";
const Admin = () => {
  return (
    <div className="admin">
      <form>
        <label htmlFor="title">
          title:
          <input type="text" name="title" />
        </label>
        <label className="textarea" htmlFor="content">
          content:
          <textarea name="content" rows={10} />
        </label>
        <input
          type="file"
          onChange={(e) => {
            console.log(e);
          }}
          name="image"
        />

        <label htmlFor="category">
          category:
          <select name="category" id="category">
            <option>Tech</option>
            <option>Sport</option>
            <option>Politics</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
