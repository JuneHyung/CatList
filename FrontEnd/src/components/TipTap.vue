<template>
    <v-container>
        <p>tiptab</p>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar">
                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                >
                    <v-icon>mdi-format-bold</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                >
                    <v-icon>mdi-format-italic</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click="commands.strike"
                >
                    <v-icon>mdi-format-strikethrough-variant</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click="commands.underline"
                >
                    <v-icon>mdi-format-underline</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                >
                    <v-icon>mdi-code-tags</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click="commands.heading({ level: 1 })"
                >
                    <v-icon>mdi-format-header-1</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })"
                >
                    <v-icon>mdi-format-header-2</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })"
                >
                    <v-icon>mdi-format-header-3</v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 4 }) }"
                    @click="commands.heading({ level: 4 })"
                >
                    <v-icon>mdi-format-header-4</v-icon>
                </button>
                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 5 }) }"
                    @click="commands.heading({ level: 5 })"
                >
                    <v-icon>mdi-format-header-5</v-icon>
                </button>
                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click="commands.bullet_list"
                >
                    <v-icon> mdi-format-list-bulleted </v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click="commands.ordered_list"
                >
                    <v-icon> mdi-format-list-numbered </v-icon>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click="commands.blockquote"
                >
                    <v-icon> mdi-format-quote-close </v-icon>
                </button>

                <button class="menubar__button" @click="commands.horizontal_rule">
                    <v-icon>mdi-minus</v-icon>
                </button>

                <button class="menubar__button" @click="commands.undo">
                    <v-icon>mdi-undo</v-icon>
                </button>

                <button class="menubar__button" @click="commands.redo">
                    <v-icon>mdi-redo</v-icon>
                </button>
            </div>
        </editor-menu-bar>

        <editor-content class="editor__content" :editor="editor" />
    </v-container>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
    Blockquote, // 인용
    HardBreak, // 강제 줄바꿈
    Heading, // h1,2,3
    HorizontalRule, // hr
    OrderedList, // 숫자리스트
    BulletList, // 점리스트
    ListItem,
    TodoItem,
    TodoList,
    Bold, // bold
    Code, // code
    Italic, // italic
    Strike, // line-through
    Underline, // underline
    History, // redo undo
} from 'tiptap-extensions';

export default {
    name: 'TipTap',
    components: {
        EditorContent,
        EditorMenuBar,
    },
    data() {
        return {
            editor: new Editor({
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new HardBreak(),
                    new Heading({ levels: [1, 2, 3, 4, 5] }),
                    new HorizontalRule(),
                    new ListItem(),
                    new OrderedList(),
                    new TodoItem(),
                    new TodoList(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Strike(),
                    new Underline(),
                    new History(),
                ],
            }),
        };
    },
};
</script>
<style scoped>
.editor {
    margin: 0 auto;
}
.editor__content {
    padding: 3px;
    margin-top: 10px;
    border: 1px solid gray;
    height: 600px;
    max-height: 600px;
    overflow: scroll;
    box-sizing: border-box;
}
.editor__content::-webkit-scrollbar {
    display: none;
}
</style>
