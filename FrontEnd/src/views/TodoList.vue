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
                        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
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

                                <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-trash-can-outline</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <span
                                    v-html="selectedEvent.description"
                                    style="color: black"
                                ></span>
                            </v-card-text>
                            <v-card-actions>
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
                        <div v-if="item == 'TODO'">
                            <v-row
                                v-for="(list, idx) in todoL"
                                :key="idx"
                                style="
                                    height: 50px;
                                    line-height: 50px;
                                    border: 1px solid grey;
                                    box-sizing: border-box;
                                    margin: 0;
                                    text-align: center;
                                "
                            >
                                <p style="width: 30%" v-if="item == list.todoStatus.toUpperCase()">
                                    {{ list.todoTitle }}
                                </p>
                                <v-spacer></v-spacer>
                                <p style="width: 60%" v-if="item == list.todoStatus.toUpperCase()">
                                    {{ list.todoContent }}
                                </p>

                                <v-spacer></v-spacer>
                                <p
                                    style="width: 10%"
                                    v-if="item == list.todoStatus.toUpperCase()"
                                    @click="deleteTodo(list.todoId)"
                                >
                                    <v-icon style="font-size: 12px; cursor: pointer">
                                        mdi-close
                                    </v-icon>
                                </p>
                            </v-row>
                        </div>
                        <div v-if="item == 'DOING'">
                            <v-row
                                v-for="(list, idx) in doingL"
                                :key="idx"
                                style="
                                    height: 50px;
                                    line-height: 50px;
                                    border: 1px solid grey;
                                    box-sizing: border-box;
                                    margin: 0;
                                    text-align: center;
                                "
                            >
                                <p style="width: 30%" v-if="item == list.todoStatus.toUpperCase()">
                                    {{ list.todoTitle }}
                                </p>
                                <v-spacer></v-spacer>
                                <p style="width: 60%" v-if="item == list.todoStatus.toUpperCase()">
                                    {{ list.todoContent }}
                                </p>

                                <v-spacer></v-spacer>
                                <p
                                    style="width: 10%"
                                    v-if="item == list.todoStatus.toUpperCase()"
                                    @click="deleteTodo(list.todoId)"
                                >
                                    <v-icon style="font-size: 12px; cursor: pointer">
                                        mdi-close
                                    </v-icon>
                                </p>
                            </v-row>
                        </div>
                        <div v-if="item == 'DONE'">
                            <v-row
                                v-for="(list, idx) in doneL"
                                :key="idx"
                                style="
                                    height: 50px;
                                    line-height: 50px;
                                    border: 1px solid grey;
                                    box-sizing: border-box;
                                    margin: 0;
                                    text-align: center;
                                "
                            >
                                <p style="width: 30%" v-if="item == list.todoStatus.toUpperCase()">
                                    {{ list.todoTitle }}
                                </p>
                                <v-spacer></v-spacer>
                                <p style="width: 60%" v-if="item == list.todoStatus.toUpperCase()">
                                    {{ list.todoContent }}
                                </p>

                                <v-spacer></v-spacer>
                                <p
                                    style="width: 10%"
                                    v-if="item == list.todoStatus.toUpperCase()"
                                    @click="deleteTodo(list.todoId)"
                                >
                                    <v-icon style="font-size: 12px; cursor: pointer">
                                        mdi-close
                                    </v-icon>
                                </p>
                            </v-row>
                        </div>
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
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
// import { getAllTodoList } from '@/api/todo.js';
import http from '@/api/http.js';
export default {
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
            todo: [],
            events: [],
            colors: ['#b2b1f0', '#b2d5', '#c945bc'],
            tab: null,
            items: ['TODO', 'DOING', 'DONE'],
            dialog: false,
            todoL: [],
            doingL: [],
            doneL: [],
            temp: {
                todoTitle: '',
                startDate: '',
                endDate: '',
                todoStatus: '',
                todoContent: '',
            },
        };
    },

    mounted() {
        // this.$refs.calendar.checkChange();
        this.getTodoList();
        this.setToday();
    },
    methods: {
        getTodoList() {
            http.get('todo/all')
                .then(({ data }) => {
                    this.todo = data;
                    data.forEach((el) => {
                        switch (el.todoStatus) {
                            case 'todo':
                                this.todoL.push(el);
                                break;
                            case 'doing':
                                this.doingL.push(el);
                                break;
                            case 'done':
                                this.doneL.push(el);
                                break;
                        }
                    });

                    this.updateRange();
                })
                .catch((err) => console.log(err));
        },
        setToday() {
            let cur = new Date();
            let year = cur.getFullYear();
            let month = cur.getMonth() + 1;
            month < 10 ? (month = '0' + month) : month;
            let date = cur.getDate();
            date < 10 ? (date = '0' + date) : date;

            this.focus = year + '-' + month + '-' + date;
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
        addTodo() {
            http.post('todo', this.temp)
                .then((response) => {
                    if (response.data == 'success') {
                        this.dialog = false;
                        this.temp = {
                            todoTitle: '',
                            startDate: '',
                            endDate: '',
                            todoStatus: '',
                            todoContent: '',
                        };
                        alert('추가 성공');
                    }
                })
                .catch((err) => console.log(err));
        },
        cancelDialog() {
            this.dialog = false;
        },
        deleteTodo(id) {
            let did = parseInt(id);
            http.delete(`/todo/${did}`)
                .then((response) => {
                    if (response.data == 'success') {
                        alert('삭제 성공');
                    }
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
