# AI usage disclosure

## Tools used
- ChatGPT (OpenAI): assisted with project planning and initial code generation.

## Representative prompts
1. Build a responsive React task dashboard with task CRUD operations.
2. Implement task state using React Context and a reducer, with localStorage persistence.
3. Add combined title search, status tabs, and priority filtering.
4. Create an accessible three-slide Focus Notes carousel and responsive layouts.

## AI-assisted areas
Initial component structure, styling direction, sample task data, reducer pattern, and documentation were AI-assisted. Review and verify the implementation before submission.

## Suggestion checked or corrected
The assessment requires the original three Focus Notes slides. Generic placeholder copy is not equivalent to the live Figma content, so the slide text in `FocusNotes.jsx` must be checked against the original Figma frames and replaced where necessary.

## Developer understanding
Task data is held in one reducer-backed Context. Components call context actions for immutable add/update/delete/status operations. The UI derives statistics and filtered results from the task array. The provider restores saved tasks from localStorage and writes updates back to the same key.
