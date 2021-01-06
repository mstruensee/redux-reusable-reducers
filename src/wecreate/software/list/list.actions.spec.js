import {
    addItemAction,
    addItemsAction,
    insertItemAction,
    removeItemAction,
    removeItemByKeyAction,
    removeItemsByKeyAction,
    resetListAction,
    setListAction,
    updateItemAction,
    updateItemByKeyAction,
    updateItemsByKeyAction,
    updateValueAllItemsAction,
} from "./list.actions"
import {
    ADD_ITEM,
    ADD_ITEMS,
    INSERT_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_BY_KEY,
    REMOVE_ITEMS_BY_KEY,
    RESET_LIST,
    SET_LIST,
    UPDATE_ITEM,
    UPDATE_ITEM_BY_KEY,
    UPDATE_ITEMS_BY_KEY,
    UPDATE_VALUE_ALL_ITEMS,
} from "./list.types"

describe("list.actions", () => {
    const reducerName = "reducerName"
    const index = 0
    const item = { id: 0 }

    it("should create an action to insert item", () => {
        expect(
            insertItemAction({
                item,
                index,
                reducerName,
            }),
        ).toEqual({
            type: INSERT_ITEM,
            payload: {
                index: 0,
                item,
            },
            meta: { reducerName },
        })
    })

    it("should create an action to remove item", () => {
        expect(
            removeItemAction({
                index,
                reducerName,
            }),
        ).toEqual({
            type: REMOVE_ITEM,
            payload: { index: 0 },
            meta: { reducerName },
        })
    })

    it("should create an action to remove item by key", () => {
        expect(
            removeItemByKeyAction({
                item,
                reducerName,
            }),
        ).toEqual({
            type: REMOVE_ITEM_BY_KEY,
            payload: { item },
            meta: { reducerName },
        })
    })

    it("should create an action to remove items by key", () => {
        expect(
            removeItemsByKeyAction({
                items: [ item ],
                reducerName,
            }),
        ).toEqual({
            type: REMOVE_ITEMS_BY_KEY,
            payload: [ item ],
            meta: { reducerName },
        })
    })

    it("should create an action to update item by index", () => {
        expect(
            updateItemAction({
                item,
                index,
                reducerName,
            }),
        ).toEqual({
            type: UPDATE_ITEM,
            payload: {
                index: 0,
                item,
            },
            meta: { reducerName },
        })
    })

    it("should create an action to update item", () => {
        expect(
            updateItemByKeyAction({
                item,
                reducerName,
            }),
        ).toEqual({
            type: UPDATE_ITEM_BY_KEY,
            payload: { item },
            meta: { reducerName },
        })
    })

    it("should create an action to update items by key", () => {
        const items = [ item, item ]

        expect(
            updateItemsByKeyAction({
                items,
                reducerName,
            }),
        ).toEqual({
            type: UPDATE_ITEMS_BY_KEY,
            payload: { items },
            meta: { reducerName },
        })
    })

    it("should create an action to update value (key/value pairs) for all items", () => {
        const keyValuePairs = { updated: true }

        expect(
            updateValueAllItemsAction({
                keyValuePairs,
                reducerName,
            }),
        ).toEqual({
            type: UPDATE_VALUE_ALL_ITEMS,
            payload: keyValuePairs,
            meta: { reducerName },
        })
    })

    it("should create an action to reset list", () => {
        expect(
            resetListAction({ reducerName }),
        ).toEqual({
            type: RESET_LIST,
            meta: { reducerName },
        })
    })

    it("should create an action to set list", () => {
        expect(
            setListAction({
                reducerName,
                payload: [],
            }),
        ).toEqual({
            type: SET_LIST,
            payload: [],
            meta: { reducerName },
        })
    })

    it("should create an action to add item to list (end)", () => {
        expect(
            addItemAction({
                reducerName,
                item,
            }),
        ).toEqual({
            type: ADD_ITEM,
            payload: item,
            meta: { reducerName },
        })
    })

    it("should create an action to add items to list (end)", () => {
        expect(
            addItemsAction({
                reducerName,
                items: [ item ],
            }),
        ).toEqual({
            type: ADD_ITEMS,
            payload: [ item ],
            meta: { reducerName },
        })
    })
})
