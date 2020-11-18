const reducers = {
  SET_COURSES: (state, action) => {
    return {
      ...state,
      courses: action.courses,
    };
  },

  ADD_TIMEBLOCK: (state, action) => {
    const newCount = state.timeblocks.count + 1;
    const blocks = state.timeblocks.blocks;
    let newKey = newCount;
    let count = 1;
    while (blocks[newKey] !== undefined) {
      newKey = count;
      count++;
    }
    return {
      ...state,
      timeblocks: {
        count: newCount,
        blocks: {
          ...state.timeblocks.blocks,
          [newKey]: {
            name: `Timeblock ${newKey}`,
            dates: [],
            times: [],
            days: [],
          },
        },
      },
    };
  },

  DELETE_TIMEBLOCK: (state, action) => {
    const { key } = action;
    const { timeblocks } = state;
    const newBlocks = { ...timeblocks.blocks };
    delete newBlocks[key];
    return {
      ...state,
      timeblocks: {
        count: timeblocks.count - 1,
        blocks: newBlocks,
      },
    };
  },
};

export default reducers;