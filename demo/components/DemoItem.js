import React from 'react';
import { SortableItemMixin } from '../../src/index.js';

export default React.createClass({
  mixins: [SortableItemMixin],

  getInitialState() {
    return {
      id : new Date().getTime()
    }
  },

  getDefaultProps() {
    return {
      className: 'demo-item'
    };
  },

  componentDidMount() {
    let { id } = this.state;
    let editorId = `#editor${id}`;
    let toolBar = `#toolBar${id}`;
    let getFocusId = editorId.split("#")[1];
    tinymce.init({
      selector: editorId,
      inline: true, //removing this will work fine
      height : 150,
      menubar: false,
      browser_spellcheck: true,
      contextmenu: false,
      fixed_toolbar_container: toolBar,
      plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "insertdatetime media table paste code"
      ],
      toolbar: "bold italic underline | alignleft aligncenter alignright alignjustify | link image"
    });
  },

  render() {
    let { id } = this.state;
    const { className, children } = this.props;
    return this.renderWithSortable(
      <div className={className}>
        {children}
        <div id={`toolBar${id}`}></div>
        <div id={`editor${id}`}> text </div>
      </div>
    );
  }
});
