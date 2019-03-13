import uuid from uuid;

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

function thumbsUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		rate: thumbs++
	}
}


function thumbsDownComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		rate: thumbs--
	}
}


const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (id, text) => { dispatch(editComment(id, text)) };
const boundUpComment = id => dispatch(thumbsUpComment(id));
const boundDownComment = id => dispatch(thumbsDownComment(id));