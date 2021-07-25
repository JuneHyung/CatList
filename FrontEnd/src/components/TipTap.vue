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
                    <img class="icon" src="@/assets/images/tiptap/bold.svg" alt="B" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                >
                    <img class="icon" src="@/assets/images/tiptap/italic.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click="commands.strike"
                >
                    <img class="icon" src="@/assets/images/tiptap/strike.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click="commands.underline"
                >
                    <img class="icon" src="@/assets/images/tiptap/underline.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                >
                    <img class="icon" src="@/assets/images/tiptap/code.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                >
                    <img class="icon" src="@/assets/images/tiptap/paragraph.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click="commands.heading({ level: 1 })"
                >
                    H1
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })"
                >
                    H2
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })"
                >
                    H3
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click="commands.bullet_list"
                >
                    <img class="icon" src="@/assets/images/tiptap/ul.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click="commands.ordered_list"
                >
                    <img class="icon" src="@/assets/images/tiptap/ol.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click="commands.blockquote"
                >
                    <img class="icon" src="@/assets/images/tiptap/quote.svg" alt="" />
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code_block() }"
                    @click="commands.code_block"
                >
                    <img class="icon" src="@/assets/images/tiptap/code.svg" alt="" />
                </button>

                <button class="menubar__button" @click="commands.horizontal_rule">
                    <img class="icon" src="@/assets/images/tiptap/hr.svg" alt="" />
                </button>

                <button class="menubar__button" @click="commands.undo">
                    <img class="icon" src="@/assets/images/tiptap/undo.svg" alt="" />
                </button>

                <button class="menubar__button" @click="commands.redo">
                    <img class="icon" src="@/assets/images/tiptap/redo.svg" alt="" />
                </button>
            </div>
        </editor-menu-bar>
        <div @click="editor.focus()">
            <editor-content class="editor__content px-2" :editor="editor" />
        </div>
    </v-container>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
// import { Editor } from 'tiptap';
import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
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
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ levels: [1, 2, 3] }),
                    new HorizontalRule(),
                    new ListItem(),
                    new OrderedList(),
                    new TodoItem(),
                    new TodoList(),
                    new Link(),
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
    methods: {
        focusEditor() {
            this.editor.focus();
        },
    },
};
</script>
<style lang="scss" scoped>
.editor {
    margin: 0 auto;
}
.editor__content {
    border: 1px solid gray;
    min-height: 10rem;
}
.icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 0.7rem;
    height: 0.8rem;
    margin: 0 0.3rem;
    top: -0.05rem;
    fill: currentColor;
    // &.has-align-fix {
    // 	top: -.1rem;
    // }
    &__svg {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 100%;
    }
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
}
// svg sprite
body > svg,
.icon use > svg,
symbol {
    path,
    rect,
    circle,
    g {
        fill: currentColor;
        stroke: none;
    }
    *[d='M0 0h24v24H0z'] {
        display: none;
    }
}
</style>
