<template>
    <v-container>
        <p>todolist가 들어갈 곳</p>
        <v-row class="fill-height" style="margin-top: 10px">
            <div class="col-12 col-lg-8">
                <v-sheet height="64">
                    <v-toolbar flat>
                        <v-spacer></v-spacer>
                        <v-btn fab text small color="grey darken-2" @click="prev">
                            <v-icon small> mdi-chevron-left </v-icon>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-btn fab text small color="grey darken-2" @click="next">
                            <v-icon small> mdi-chevron-right </v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn outlined class="mr-4" color="grey darken-2" @click="setCurToday">
                            Today
                        </v-btn>
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="760">
                    <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        type="month"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="updateRange"
                    ></v-calendar>
                    <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                    >
                        <v-card color="grey lighten-4" max-width="450px" flat>
                            <v-toolbar dark>
                                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <span
                                    v-html="selectedEvent.description"
                                    style="color: black"
                                ></span>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text color="secondary" @click="selectedOpen = false">
                                    Cancel
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </v-sheet>
            </div>
            <v-card class="col-12 col-lg-4" style="margin: 0">
                <v-card-title style="padding: 0"> {{ focus }}</v-card-title>
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab v-for="item in items" :key="item">
                        {{ item }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab" style="height: 600px">
                    <v-tab-item v-for="item in items" :key="item" style="margin: 20px">
                        <v-dialog v-model="dialog" persistent max-width="290">
                            <template v-slot:activator="{ on, attrs }">
                                <p
                                    style="
                                        width: 100%;
                                        height: 50px;
                                        line-height: 50px;
                                        text-align: center;
                                        border: 1px solid grey;
                                        background-color: rgba(200, 200, 200, 0.1);
                                        box-sizing: border-box;
                                        cursor: pointer;
                                    "
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="resetTemp()"
                                >
                                    +
                                </p>
                            </template>
                            <v-card>
                                <v-card-title class="text-h5"> Add Work </v-card-title>
                                <v-card-text style="margin-top: 20px">
                                    <v-row>
                                        <p styl>제목</p>
                                        <v-spacer></v-spacer>
                                        <input
                                            type="text"
                                            placeholder="제목을 입력하세요."
                                            v-model="temp.todoTitle"
                                        />
                                    </v-row>
                                    <v-row>
                                        <p>시작 날짜 :</p>
                                        <v-spacer></v-spacer>
                                        <input type="date" v-model="temp.startDate" />
                                    </v-row>
                                    <v-row>
                                        <p>끝 날짜 :</p>
                                        <v-spacer></v-spacer>
                                        <input type="date" v-model="temp.endDate" />
                                    </v-row>
                                    <v-row>
                                        <p style="line-height: 56px">상태 :</p>
                                        <v-spacer></v-spacer>
                                        <v-col cols="8" style="padding: 0">
                                            <v-select
                                                :items="status"
                                                outlined
                                                v-model="temp.todoStatus"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <p>내용 :</p>
                                        <v-spacer></v-spacer>
                                        <v-textarea
                                            name="input-5-1"
                                            outlined
                                            v-model="temp.todoContent"
                                        ></v-textarea>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green darken-1" text @click="cancelDialog()">
                                        닫기
                                    </v-btn>
                                    <v-btn color="green darken-1" text @click="addTodo">
                                        추가
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <div v-for="(list, idx) in todo" :key="idx">
                            <v-row
                                v-if="list.todoStatus.toUpperCase() == item"
                                style="height: 50px; line-height: 50px; margin: 0"
                            >
                                <p style="width: 20%">
                                    {{ list.todoTitle }}
                                </p>
                                <v-spacer></v-spacer>
                                <p style="width: 60%">
                                    {{ list.todoContent }}
                                </p>

                                <v-spacer></v-spacer>
                                <v-dialog v-model="updateDialog" persistent max-width="290">
                                    <template v-slot:activator="{ on, attrs }">
                                        <p
                                            style="width: 5%; text-align: center"
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="updateTemp(list)"
                                        >
                                            <v-icon style="font-size: 12px; cursor: pointer">
                                                mdi-pencil
                                            </v-icon>
                                        </p>
                                    </template>
                                    <v-card>
                                        <v-card-title class="text-h5"> Update Work </v-card-title>
                                        <v-card-text style="margin-top: 20px">
                                            <v-row>
                                                <p styl>제목</p>
                                                <v-spacer></v-spacer>
                                                <input type="text" v-model="temp.todoTitle" />
                                            </v-row>
                                            <v-row>
                                                <p>시작 날짜 :</p>
                                                <v-spacer></v-spacer>
                                                <input type="date" v-model="temp.startDate" />
                                            </v-row>
                                            <v-row>
                                                <p>끝 날짜 :</p>
                                                <v-spacer></v-spacer>
                                                <input type="date" v-model="temp.endDate" />
                                            </v-row>
                                            <v-row>
                                                <p style="line-height: 56px">상태 :</p>
                                                <v-spacer></v-spacer>
                                                <v-col cols="8" style="padding: 0">
                                                    <v-select
                                                        :items="status"
                                                        outlined
                                                        v-model="temp.todoStatus"
                                                    ></v-select>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <p>내용 :</p>
                                                <v-spacer></v-spacer>
                                                <v-textarea
                                                    name="input-5-1"
                                                    outlined
                                                    v-model="temp.todoContent"
                                                ></v-textarea>
                                            </v-row>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="cancelDialog()"
                                            >
                                                닫기
                                            </v-btn>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="updateTodo(list.todoId)"
                                            >
                                                수정
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <p
                                    style="width: 5%; text-align: center"
                                    @click="deleteTodo(list.todoId)"
                                >
                                    <v-icon style="font-size: 12px; cursor: pointer">
                                        mdi-close
                                    </v-icon>
                                </p>
                            </v-row>
                        </div>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { moveTodoList } from '@/api/move.js';
import { setToday } from '@/api/util.js';
export default {
    computed: {
        ...mapState(['todo']),
    },
    data() {
        return {
            status: ['todo', 'doing', 'done'],
            focus: '',
            selectedEvent: {
                name: '',
                description: '',
            },
            selectedElement: null,
            selectedOpen: false,
            events: [],
            colors: ['#b2b1f0', '#b2d5', '#c945bc'],
            tab: null,
            items: ['TODO', 'DOING', 'DONE'],
            dialog: false,
            temp: {
                todoTitle: '',
                startDate: '',
                endDate: '',
                todoStatus: '',
                todoContent: '',
            },
            updateDialog: false,
        };
    },

    mounted() {
        // this.$refs.calendar.checkChange();
        this.getTodoList();
        this.setCurToday();
    },
    methods: {
        async getTodoList() {
            await this.$store.dispatch('GET_ALL_TODOLIST');
            await this.updateRange();
        },
        setCurToday() {
            this.focus = setToday();
        },
        viewDay({ date }) {
            this.focus = date;
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event;
                this.selectedElement = nativeEvent.target;
                setTimeout(() => {
                    this.selectedOpen = true;
                }, 10);
            };

            if (this.selectedOpen) {
                this.selectedOpen = false;
                requestAnimationFrame(function () {
                    requestAnimationFrame(() => open());
                });
            } else {
                open();
            }

            nativeEvent.stopPropagation();
        },
        updateRange() {
            const todoEvents = [];
            for (let i = 0; i < this.todo.length; i++) {
                let colorIdx = this.items.indexOf(this.todo[i].todoStatus.toUpperCase());
                todoEvents.push({
                    name: this.todo[i].todoTitle,
                    start: this.todo[i].startDate,
                    end: this.todo[i].endDate,
                    color: this.colors[colorIdx],
                    description: this.todo[i].todoContent,
                });
            }

            this.events = todoEvents;
        },
        async addTodo() {
            await this.$store.dispatch('POST_TODOLIST', this.temp);
            await this.$store.commit('toggleFlag', false);
            await this.resetTemp();
            await moveTodoList();
        },
        async updateTodo(id) {
            let lid = parseInt(id);
            const temp = this.temp;
            await this.$store.dispatch('PUT_TODOLIST', { lid, temp });
            await this.$store.commit('toggleFlag', false);
            await moveTodoList();
        },
        cancelDialog() {
            this.dialog = false;
            this.updateDialog = false;
        },
        updateTemp(list) {
            this.temp = list;
        },
        resetTemp() {
            this.temp = {
                todoTitle: '',
                startDate: '',
                endDate: '',
                todoStatus: '',
                todoContent: '',
            };
        },
        async deleteTodo(id) {
            let did = parseInt(id);
            await this.$store.dispatch('DELETE_TODOLIST', did);
            await this.$store.commit('toggleFlag', false);
            await moveTodoList();
        },
    },
};
</script>

<style scoped></style>
