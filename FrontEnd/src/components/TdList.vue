<template>
    <v-card class="col-12 col-lg-4" style="margin: 0">
        <v-card-title class="cardTitle"> {{ today }}</v-card-title>
        <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="item in items" :key="item">
                {{ item }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="todoOutBox">
            <v-tab-item v-for="item in items" :key="item" style="margin: 20px">
                <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                        <p class="addTodoBtn" v-bind="attrs" v-on="on" @click="resetTemp()">+</p>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5"> Add Work </v-card-title>
                        <v-card-text class="mt-5">
                            <v-row>
                                <p>제목</p>
                                <v-spacer></v-spacer>
                                <v-input
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
                                        :items="item.toLowerCase()"
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
                            <v-btn color="green darken-1" text @click="addTodo"> 추가 </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <div v-for="(list, idx) in todo" :key="idx">
                    <v-row v-if="list.todoStatus.toUpperCase() == item" class="todoItem">
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
                                                :items="item.toLowerCase()"
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
                        <p style="width: 5%; text-align: center" @click="deleteTodo(list.todoId)">
                            <v-icon style="font-size: 12px; cursor: pointer"> mdi-close </v-icon>
                        </p>
                    </v-row>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { moveTodoList } from '@/api/move.js';
export default {
    computed: {
        ...mapState(['todo', 'today']),
    },
    props: {
        items: Array,
    },
    data() {
        return {
            tab: null,
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
    methods: {
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

<style scoped>
.cardTitle {
    padding: 0;
}
.todoOutBox {
    height: 600px;
}
.addTodoBtn {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid grey;
    background-color: rgba(200, 200, 200, 0.1);
    box-sizing: border-box;
    cursor: pointer;
}
.todoItem {
    height: 50px;
    line-height: 50px;
    margin: 0;
}
</style>
