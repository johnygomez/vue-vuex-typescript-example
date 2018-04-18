import Component from 'vue-class-component'
import { Prop, Vue } from 'vue-property-decorator'
import WithRender from '../templates/todo.html'

@WithRender
@Component
export default class ToDo extends Vue {
  @Prop() name: string
  @Prop({ default: 'Default' }) txt: string
  @Prop({ default: false }) done: boolean
  // This works only if @Component imported from vue-class-component, otherwise must be specified in decorator properties
  created() {
    console.log('created')
  }
}
