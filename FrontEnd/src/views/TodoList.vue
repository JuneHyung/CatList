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
                        :event-color="getEventColor"
                        type="month"
                        @click:event="showEvent"
                        @change="updateRange"
                    ></v-calendar>
                    <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                    >
                        <v-card color="grey lighten-4" min-width="350px" flat>
                            <v-toolbar :color="selectedEvent.color" dark>
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
                                <span v-html="selectedEvent.details"></span>
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
                <v-card-title style="padding: 0">2021년 7월 6일</v-card-title>
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab v-for="item in items" :key="item">
                        {{ item }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab" style="height: 600px">
                    <v-tab-item v-for="item in items" :key="item" style="margin: 20px">
                        <v-row
                            v-for="(list, idx) in todo"
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
                            <p style="width: 20%">
                                {{ list }}
                            </p>
                            <v-spacer></v-spacer>
                            <p style="width: 70%">TEXT</p>

                            <v-spacer></v-spacer>
                            <p style="width: 10%">
                                <v-icon style="font-size: 12px; cursor: pointer">
                                    mdi-close
                                </v-icon>
                            </p>
                        </v-row>
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
                                <v-card-title class="text-h5">
                                    Use Google's location service?
                                </v-card-title>
                                <v-card-text
                                    >Let Google help apps determine location. This means sending
                                    anonymous location data to Google, even when no apps are
                                    running.</v-card-text
                                >
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green darken-1" text @click="dialog = false">
                                        Disagree
                                    </v-btn>
                                    <v-btn color="green darken-1" text @click="dialog = false">
                                        Agree
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
export default {
    data: () => ({
        focus: '',
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
        tab: null,
        items: ['TODO', 'DOING', 'DONE'],
        todo: ['todo01', 'todo02', 'todo03'],
        dialog: false,
    }),
    mounted() {
        this.$refs.calendar.checkChange();
    },
    methods: {
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.focus = '';
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
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => (this.selectedOpen = true))
                );
            };

            if (this.selectedOpen) {
                this.selectedOpen = false;
                requestAnimationFrame(() => requestAnimationFrame(() => open()));
            } else {
                open();
            }

            nativeEvent.stopPropagation();
        },
        updateRange({ start, end }) {
            const events = [];

            const min = new Date(`${start.date}T00:00:00`);
            const max = new Date(`${end.date}T23:59:59`);
            const days = (max.getTime() - min.getTime()) / 86400000;
            const eventCount = this.rnd(days, days + 20);

            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 3) === 0;
                const firstTimestamp = this.rnd(min.getTime(), max.getTime());
                const first = new Date(firstTimestamp - (firstTimestamp % 900000));
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
                const second = new Date(first.getTime() + secondTimestamp);

                events.push({
                    name: this.names[this.rnd(0, this.names.length - 1)],
                    start: first,
                    end: second,
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay,
                });
            }

            this.events = events;
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        },
    },
};
</script>

<style></style>
