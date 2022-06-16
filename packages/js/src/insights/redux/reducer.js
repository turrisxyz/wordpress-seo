import { cloneDeep } from "lodash";
import { LOAD_ESTIMATED_READING_TIME, SET_ESTIMATED_READING_TIME, SET_FLESCH_READING_EASE, SET_PROMINENT_WORDS, SET_WORD_COUNT } from "./actions";

const INITIAL_STATE = {
	estimatedReadingTime: 0,
	fleschReadingEaseScore: 0,
	// Including `<a>` and `</a>`, so we can interpolate.
	fleschReadingEaseText: "",
	// Note the usage of cloneDeep due this being an array (spreading would leave this memory address).
	prominentWords: [],
	wordCount: 0,
};

/**
 * Reduces the insights data.
 *
 * @param {Object} previousState The state.
 * @param {Object} action The action.
 * @param {string} action.type The action type.
 * @param {*} action.payload The action payload.
 *
 * @returns {Object} The new state.
 */
const reducer = ( previousState = INITIAL_STATE, { type, payload } ) => {
	const state = cloneDeep( previousState );

	switch ( type ) {
		case LOAD_ESTIMATED_READING_TIME:
		// Fallthrough condition because format of LOAD_ and SET_ actions are the same.
		case SET_ESTIMATED_READING_TIME:
			state.estimatedReadingTime = payload;
			break;
		case SET_FLESCH_READING_EASE:
			state.fleschReadingEaseScore = payload.score;
			state.fleschReadingEaseText = payload.text;
			break;
		case SET_PROMINENT_WORDS:
			state.prominentWords = payload;
			break;
		case SET_WORD_COUNT:
			state.wordCount = payload;
			break;
	}

	return state;
};

export default reducer;
