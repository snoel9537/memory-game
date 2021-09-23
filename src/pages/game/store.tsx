import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mark } from 'types/mark';
import { CardInfo } from 'types/card';

const CARDS_AMOUNT = 12;
export const ALL_MARKS: Mark[] = ['a', 'b', 'c', 'd', 'e', 'f'];

interface GameStore {
  cards: CardInfo[];
}

// Define the initial state using that type
const initialState: GameStore = {
  cards: [],
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    generateCards: (state) => {
      type TempCard = { card: CardInfo; position: number };
      const tempCards: TempCard[] = [];
      for (let i = 0; i < CARDS_AMOUNT / 2; i++) {
        const mark = ALL_MARKS[i % ALL_MARKS.length];
        tempCards.push({
          card: { mark },
          position: Math.random(),
        });
        // pair card
        tempCards.push({
          card: { mark },
          position: Math.random(),
        });
      }
      const positionSorter = (t1: TempCard, t2: TempCard) => t1.position - t2.position;
      state.cards = tempCards.sort(positionSorter).map((temp) => temp.card);
    },
    openCard: (state, { payload: { index } }: PayloadAction<{ index: number }>) => {
      const shownCards = state.cards.filter((card) => card.isShown);
      if (shownCards.length < 2) {
        state.cards[index].isShown = true;
      }
    },
    checkPair: (state) => {
      const shownCards = state.cards.filter((card) => card.isShown);
      if (shownCards.length === 2) {
        shownCards.forEach((card) => (card.isShown = false));
        if (shownCards[0].mark === shownCards[1].mark) {
          shownCards.forEach((card) => (card.isGuessed = true));
        }
      }
    },
  },
});

export const gameActions = slice.actions;
export const gameReducer = slice.reducer;
