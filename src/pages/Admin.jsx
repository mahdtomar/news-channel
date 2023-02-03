import React from "react";
import "../Sass/Admin.css";
const Admin = () => {
  return (
    <div className="admin">
      <form action="{{ route('create') }}" enctype="multipart/form-data" method="POST">
        <label className="title" htmlFor="title">
          <input type="text" name="title" placeholder="Title" />
        </label>
        <label className="textarea" htmlFor="content">
          <textarea name="content" rows={10} placeholder="Content" />
        </label>
        <input type="file" name="image" />
        <label htmlFor="category">
          category:
          <select name="category" id="category" defaultValue={"category"}>
            <option value={"tech"}>Tech</option>
            <option value={"sport"}>Sport</option>
            <option value={"politics"}>Politics</option>
          </select>
          <div className="category-list"></div>
        </label>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
