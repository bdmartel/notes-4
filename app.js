import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import edjsHTML from 'editorjs-html';

document.addEventListener('DOMContentLoaded', () => {
  const notesContainer = document.getElementById('notesContainer');
  const noteForm = document.getElementById('noteForm');
  const noteTitle = document.getElementById('noteTitle');

  const API_URL = 'http://localhost:3000/notes';

  const editor = new EditorJS({
    holder: 'editor-container',
    placeholder: 'Write your notes here...',
    tools: {
      header: Header,
      list: List,
    },
  });

  const parser = edjsHTML();

  const fetchNotes = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch notes');
      let notes = await response.json();
      notes = notes.sort((a, b) => b.id - a.id);
      renderNotes(notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const renderNotes = (notes) => {
    notesContainer.innerHTML = '';
    notes.forEach((note) => {
      const noteDiv = document.createElement('div');
      noteDiv.className = 'note';
      let htmlContent = note.content;
      try {
        const data = JSON.parse(note.content);
        htmlContent = parser.parse(data).join('');
      } catch (e) {
        // assume content is already HTML
      }
      noteDiv.innerHTML = `
        <h3>${note.title || 'Untitled'}</h3>
        <div>${htmlContent}</div>
        <button class="edit-btn" data-id="${note.id}">Edit</button>
      `;
      notesContainer.appendChild(noteDiv);
      noteDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
          const noteId = event.target.getAttribute('data-id');
          loadNoteForEditing(noteId);
        } else {
          openInlineEditor(note, noteDiv);
        }
      });
    });
  };

  const parseContent = (content) => {
    try {
      return JSON.parse(content);
    } catch (e) {
      const text = content.replace(/<[^>]*>?/gm, '');
      return { blocks: [{ type: 'paragraph', data: { text } }] };
    }
  };

  const openInlineEditor = (note, noteDiv) => {
    const holderId = `inline-editor-${note.id}`;
    noteDiv.innerHTML = `
      <input type="text" class="inline-title" value="${note.title || ''}" />
      <div id="${holderId}" class="inline-editor"></div>
      <button class="save-inline">Save</button>
      <button class="cancel-inline">Cancel</button>
    `;

    const inlineEditor = new EditorJS({
      holder: holderId,
      tools: { header: Header, list: List },
      data: parseContent(note.content),
    });

    noteDiv.querySelector('.save-inline').addEventListener('click', async () => {
      const savedData = await inlineEditor.save();
      const updatedNote = {
        title: noteDiv.querySelector('.inline-title').value.trim(),
        content: JSON.stringify(savedData),
      };
      try {
        const response = await fetch(`${API_URL}/${note.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedNote),
        });
        if (!response.ok) throw new Error('Failed to update note');
        fetchNotes();
      } catch (error) {
        console.error('Error saving note:', error);
      }
    });

    noteDiv.querySelector('.cancel-inline').addEventListener('click', () => {
      fetchNotes();
    });
  };

  const loadNoteForEditing = async (noteId) => {
    if (!noteId) return;
    try {
      const response = await fetch(`${API_URL}/${noteId}`);
      if (!response.ok) throw new Error('Failed to fetch the note');
      const note = await response.json();
      noteTitle.value = note.title;
      await editor.clear();
      let data;
      try {
        data = JSON.parse(note.content);
      } catch (e) {
        data = { blocks: [{ type: 'paragraph', data: { text: note.content } }] };
      }
      await editor.render(data);
      noteForm.setAttribute('data-edit-id', noteId);
    } catch (error) {
      console.error('Error loading note for editing:', error);
    }
  };

  noteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const noteId = noteForm.getAttribute('data-edit-id');
    const savedData = await editor.save();
    const newNote = {
      title: noteTitle.value.trim(),
      content: JSON.stringify(savedData),
    };

    if (!savedData.blocks.length) {
      alert('Note content cannot be empty!');
      return;
    }

    try {
      const url = noteId ? `${API_URL}/${noteId}` : API_URL;
      const method = noteId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) throw new Error(noteId ? 'Failed to update note' : 'Failed to add note');

      noteTitle.value = '';
      await editor.clear();
      noteForm.removeAttribute('data-edit-id');
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  });

  fetchNotes();
});
